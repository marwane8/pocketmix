## Remix  
Steps for bootstrapping the client portion of pocketmix
Prequsites: 
 - Complete the server setup for pocketbase in server-setup.md


#### Tool Kit
[cloudflare](https://dash.cloudflare.com)

[dasyui](https://daisyui.com)



#### 1 - Create remix SPA 
> Start remix in SPA mode 
```
npx create-remix@latest --template remix-run/remix/templates/spa

# update dev package.json
"dev": "remix vite:dev --host --port 3000",

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

#### 5 - Setup cloudflare domain
> Set up cloud flare continuous deployment *signin with github email 
```

- add individual domain paths through this path for 
Worker Pages > pocketmix > Customdomains:
1. lightclickphoto.com
2. www.lightclickphoto.com
3. CNAME: admin/174.138.42.1

```

* redeploy if it fails the first time

