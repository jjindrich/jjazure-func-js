# JJ Azure Function in Javascript
This repo contains Azure Function created with Visual Studio Code.

Using this VS Code [extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)

Make sure you have supported NodeJS [link](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

## Setup local development
Follow this [instructions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)

Open Visual Studio Code, clone my repo. Publish Function from VS Code extension Azure Functions.

## How to Debug
[Instructions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)

Start Function and attach Debugger
```bash
func host start --debug vscode
```

## How to deploy in Azure

### Create Azure Function on Linux

We are using ARM template to deploy it, if you want change parameters file.
```bash
cd deploy
az group create -n jjfunclinux -l westeurope
az group deployment create -g jjfunclinux --template-file azuredeploy.json --parameters azuredeploy-params.json
```

### Prepare queue in Azure Storage Queue

For following function we need to create queue:
```bash
az storage queue create --account-name jjqueue --account-key $(az storage account keys list -g jjfunclinux -n jjqueue --query [0].value -o json) -n orders
```

### Deploy function in Azure



## Function: ProcessQueue

This function process message in orders queue jjqueue storage account.



## Function: IpLocation

This function receives geolocation of ip address (thanks to @valda-z).

![screenshot1](media/snip1.png)
