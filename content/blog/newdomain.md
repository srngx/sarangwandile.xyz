---
date: '2024-12-06T23:48:24+05:30'
draft: false
title: 'Newdomain'
---

# New Domain purchased.

Recently I just purchased new domain "sarangwandile.xyz" from godaddy.

but something didint go well.

As soon i purchased it it went into black list of **Spam Eating Monkey**

```txt
SEM-FRESH — Domains registered in the last 5 days
SEM-FRESH10 — Domains registered in the last 10 days
SEM-FRESH15 — Domains registered in the last 15 days
SEM-FRESH30 — Domains registered in the last 30 days

```

And I was panick as It was rufusing to load my github pages static website (which would be this one)

I create hugo based personal website just to test this domain. And thought I would stick to it for at least one year.
but because of this panick I was angry onto godaddy for what deemed for me to be **bad service**
but then one friend told me to use cloudflare nameservers and I did.

and site is visible but still I can only see it with using vpn.

I need to do something regarding blacklisting.

and hugo site also not properly working and not showing images and another links at this point.

unto it.

bye.

***

# Update 
The Images not loading issue was because of hugo `baseUrl` configuration. 
This varialbe if set to domain or custom link it resolves the links relative to that url.
So if I leave it empty `basUrl = ""` and ran with `hugo server` command it automatically assumes "localhost:1313" for base url. but if set to another url like `example.com` it try it use it.
but my static site wasnt deployed using hugo framework from cloudflare I just build hugo site on windows and push it to github repo and cloudflare pages will statically serve the pages in "/public" folder.

So upon changin baseUrl to "/" just works and fixed the issue.
 
So ig now I have one less issue to fix.

## Another Update as on 08/12/2024
It turns out these blacklist will automatically clear my domain after 5 days
Fortunately it seems to fixed itself and now I dont have to wait for 5 days and **I can load my website without vpn now.**

# Todo
- [x] Fixing images and relative urls not showing
- [ ] Removing domain from blacklisting  

# Notes

when building site with hugo always use with these `flags` if you dont want to regret later.

```bash
hugo server --baseURL https://example.org/ --appendPort=false 
```

additionally you can also add `baseUrl="https://example.org"` in your `hugo.yaml`

