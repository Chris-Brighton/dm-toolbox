<template>
  <div>
    <v-data-table
      dense
      :headers="header"
      :items="rows"
      :items-per-page="10"
      :server-items-length="total"
      class="data-table-custom"
      :footer-props="{ itemsPerPageOptions: [10, 20, 50, 100, -1] }"
      loading-text="Loading... Please wait"
      :loading="loading"
      hide-default-header
      calculate-widths
      @update:options="fetch"
    >
      <template
        #header="{
          props: {
            headers: heads,
            options: { sortBy, sortDesc },
          },
          on,
        }"
      >
        <thead class="v-data-table-header">
          <tr>
            <th
              v-for="(
                { value, text, sortable, align, width, maxWidth }, k
              ) in heads"
              :key="value + k"
              class="custom-th"
              :class="{
                sortable: sortable !== false,
                'text-left': align !== 'left' || align !== 'right',
                'text-center': align === 'center',
                'text-right': align === 'right',
              }"
              :style="cellStyle(width, maxWidth)"
              @click.prevent="on.sort(value)"
            >
              <div class="d-flex">
                <span v-if="text" :sort-by="sortBy" :sort-desc="sortDesc">
                  {{ text }}
                </span>
                <template v-if="sortable !== false">
                  <v-icon
                    class="ml-1"
                    small
                    :color="
                      sortIcon(value, sortBy[0], sortDesc[0]).includes(
                        'mdi-arrow-'
                      )
                        ? 'secondary'
                        : 'grey'
                    "
                  >
                    {{ sortIcon(value, sortBy[0], sortDesc[0]) }}
                  </v-icon>
                </template>
              </div>
            </th>
          </tr>
        </thead>
      </template>
      <template #item="{ item, headers: head, index }">
        <tr class="custom-row">
          <template v-for="(h, k) in head">
            <td
              v-if="h.value !== 'delete'"
              :key="index + '-' + k"
              :class="{
                'text-left': h.align !== 'center' || h.align !== 'right',
                'text-center': h.align === 'center',
                'text-right': h.align === 'right',
              }"
              class="py-1 custom-cell"
              style="cursor: pointer"
              :style="cellStyle(h.width, h.maxWidth)"
              @click.prevent="goto(item.id)"
            >
              <slot
                :name="'col-' + h.value"
                v-bind="{ item, value: item[h.value], index }"
              >
                {{ item[h.value] }}
              </slot>
            </td>
            <td v-if="h.value === 'delete'" :key="index + '-' + k">
              <v-btn
                tile
                color="error"
                class="py-1 custom-cell table-delete-item"
                @click.prevent="showDeleteDialog(item)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </template>
        </tr>
      </template>
    </v-data-table>
    <v-dialog v-model="showDeleteModal" width="512">
      <v-card tile>
        <v-card-title class="error--text h2 my-0 py-1">
          Delete Item
        </v-card-title>
        <v-divider />
        <v-card-text class="text-center pt-3">
          <strong> Are you sure you want to delete this item? </strong>
        </v-card-text>
        <v-card-actions class="pa-0 d-flex flex-row">
          <v-btn
            tile
            class="ma-0 py-4"
            style="width: 50%"
            color="success"
            @click.prevent="showDeleteModal = false"
          >
            cancel
          </v-btn>
          <v-btn
            tile
            class="ma-0 py-4"
            style="width: 50%"
            color="error"
            @click.prevent="remove"
          >
            delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'DataTable',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    update: {
      type: String,
      required: true,
    },
    showDelete: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      rows: [],
      total: 0,
      loading: false,
      offset: 0,
      limit: 20,
      showDeleteModal: false,
      header: this.showDelete
        ? this.headers.concat([{ value: 'delete', sortable: false }])
        : this.headers,
    }
  },

  watch: {
    headers(n, o) {
      if (JSON.stringify(n) !== JSON.stringify(o)) {
        if (this.showDelete) {
          n.push({ value: 'delete', sortable: false })
        }
        this.header = n
      }
    },
  },
  async mounted() {
    await this.fetch()
  },
  methods: {
    cellStyle(w, mW) {
      const style = {}
      if (w && typeof w === 'string') style.minWidth = w
      if (w && typeof w === 'number') style.minWidth = `${w}px`
      if (mW && typeof mW === 'string') style.maxWidth = mW
      if (mW && typeof mW === 'number') style.maxWidth = `${mW}px`
      return style
    },
    sortIcon(value, sortBy, sortDesc = false) {
      if (value === sortBy) {
        return `mdi-arrow-${sortDesc ? 'up' : 'down'}-bold`
      }
      return 'mdi-format-vertical-align-center'
    },
    goto(id) {
      this.$router.push(this.update + '/' + id)
    },
    async fetch(options) {
      let itemsPerPage = this.limit
      let page
      let sortBy = []
      let sortDesc = []
      if (options) {
        itemsPerPage = options.itemsPerPage
        page = options.page
        sortBy = options.sortBy
        sortDesc = options.sortDesc
      }
      this.loading = true
      let offset = this.offset
      if (page) offset = (page - 1) * itemsPerPage
      const query = {
        $limit: itemsPerPage,
        $offset: offset,
      }
      if (sortBy.length > 0) {
        const sort = {}
        for (let i = 0; i < sortBy.length; i++) {
          const field = sortBy[i]
          const dir = sortDesc[i] ? 1 : -1
          sort[field] = dir
        }
        query.$sort = sort
      }
      this.offset = offset
      this.limit = itemsPerPage
      const { rows, total } = await this.$service(this.service).find(query)
      this.$nextTick(() => {
        if (rows && total) {
          this.rows = rows
          this.total = total
        } else {
          this.rows = []
          this.total = 0
        }
        this.$nextTick(() => {
          this.loading = false
        })
      })
    },
    async remove() {
      this.loading = true
      await this.$service(this.service).remove(this.selected)
      this.$nextTick(async () => {
        this.$toast.success('Item Deleted')
        await this.fetch()
        this.showDeleteModal = false
      })
    },
    showDeleteDialog({ id }) {
      this.selected = id
      this.$nextTick(() => {
        this.showDeleteModal = true
      })
    },
  },
}
</script>

<style lang="sass">
.data-table-custom
  p
    margin: 0
.v-data-table-header__icon
  color: var(--v-primary) !important
  margin-left: 2px
.table-delete-item
  width: 36px !important
  min-width: 36px !important
.custom-th
  &:hover
    color: var(--v-primary) !important
</style>