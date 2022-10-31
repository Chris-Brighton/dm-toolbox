#!/bin/bash
if [ -f "$HOME/.nvm/nvm.sh" ];
then
echo "node version manager is installed"
source $HOME/.nvm/nvm.sh; nvm use
else
echo "No node version manager installed not setting node version"
fi