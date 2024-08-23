## Remix  
Steps for bootstrapping the client portion of pocketmix
Prequsites: 
 - Complete the server setup for pocketbase in server-setup.md


#### Tool Kit
[dasyui](https://daisyui.com)

[cloudflare](https://dash.cloudflare.com)


#### 1 - Create remix SPA 
> Start remix in SPA mode 
```
npx create-remix@latest --template remix-run/remix/templates/spa

```

#### 2 - Verify Tailwind and Prietter are working
> Start remix in SPA mode 
```
index.js > add-class, messup structure > reformat document

```

#### 3 - Add Daisy UI 
> Start remix in SPA mode 
```
npm i -D daisyui@latest
cp ./setup-client/tailwind.config.ts ./

```

#### 4 - Setup cloudflare pages 
> Set up cloud flare continuous deployment *signin with github email 
```

Worker Pages > Create > Pages > Connect to git
> Select Repository > Framework Presets


```
* redploy if it fails the first time

