# JSONSchema

Beware. There might be bugs, but it serves me well at the moment. If you find any problems feel free to first open an [issue](https://github.com/inpyjamas/schemas/issues).

## render.yaml

 Take a look at the [full spec on render.com](https://render.com/docs/yaml-spec). 
### Usage in VSCode

1. You need to install and enable the YAML extension [redhat.vscode-yaml](https://github.com/redhat-developer/vscode-yaml)
2. You need to add the url of the schema to your `settings.json` like this:
    ```json
    {
      "https://schemas.onrender.com/render.com.json": ["render.yaml"]
    }
    ```
3. Reload your window
4. Let's go
