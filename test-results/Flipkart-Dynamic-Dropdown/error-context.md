# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Flipkart.spec.js >> Dynamic Dropdown
- Location: tests\Practice\Flipkart.spec.js:46:6

# Error details

```
TypeError: page.goto(...).waitFor is not a function
```

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.flipkart.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link [ref=e37] [cursor=pointer]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]: Location not set
          - generic [ref=e59]: Select delivery location
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e86]:
            - link "Login" [ref=e87] [cursor=pointer]:
              - /url: /login?ret=/
              - img "Login" [ref=e88]
            - img "Chevron" [ref=e90]
          - generic [ref=e95]:
            - link "More" [ref=e96] [cursor=pointer]:
              - /url: "#"
            - img "Chevron" [ref=e98]
          - link "Cart Cart" [ref=e101] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e102]
            - generic [ref=e103]: Cart
      - generic [ref=e105]:
        - link [ref=e110] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - heading "For You" [level=1] [ref=e116]
        - link "Fashion" [ref=e121] [cursor=pointer]:
          - /url: /ss-26-base-inline-at-store
        - link "Mobiles" [ref=e132] [cursor=pointer]:
          - /url: /mobile-phones-store
        - link "Electronics" [ref=e143] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
        - link "Beauty" [ref=e154] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
        - link "Home" [ref=e165] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
        - link "Appliances" [ref=e176] [cursor=pointer]:
          - /url: /bbd26-at-store
        - link "Toys, baby.." [ref=e187] [cursor=pointer]:
          - /url: /toysbc-new26-inline-at-store
        - link "Food & Health" [ref=e198] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
        - link "Auto Accessories" [ref=e209] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
        - link "Sports & Fitness" [ref=e220] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
        - link "Furniture" [ref=e231] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
        - link "Books" [ref=e242] [cursor=pointer]:
          - /url: /books-at-store
        - link "2 Wheelers" [ref=e253] [cursor=pointer]:
          - /url: /twowheelers-at-store
    - generic [ref=e267]:
      - generic [ref=e282]:
        - link [ref=e289] [cursor=pointer]:
          - /url: /early-bird-deals-store?param=087&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=KZ58NRGSDFNZ_IAD&BU=Mixed
          - img "Image" [ref=e297]
        - link [ref=e304] [cursor=pointer]:
          - /url: /health-care/health-supplements/milk-drink-mixes/pr?sid=hlc%2Cetg%2Csxm&p%5B%5D=facets.ideal_for%255B%255D%3DKids&param=334543&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=DLVLAX5WHMCD_IAD&BU=Mixed
          - img "Image" [ref=e307]
        - link [ref=e314] [cursor=pointer]:
          - /url: /hmd-vibe2-pro-5g-aqua-green-128-gb/p/itmd425c7e495e6d?pid=MOBHQZZ85MVV5GMX&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=AELX56ORV0PU_AD&BU=Mixed
          - img "Image" [ref=e317]
        - link [ref=e324] [cursor=pointer]:
          - /url: /oppo-k14-plus-5g/p/itm6b2b1016fd57a?pid=MOBHR3ZYWM7R57PW&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=US5O0SPXYIBB_AD&BU=Mixed
          - img "Image" [ref=e327]
        - link [ref=e334] [cursor=pointer]:
          - /url: /boltt-evo-sky-blue-64-gb/p/itmf046d663a1fd7?pid=MOBHPP59WKSV4FYG&marketplace=FLIPKART&lid=LSTMOBHPP59WKSV4FYGYPMLV6&pageUID=1790156714591&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=B4UTBPB8GT0Y_AD&BU=Mixed
          - img "Image" [ref=e337]
        - link [ref=e344] [cursor=pointer]:
          - /url: /g9b/~cs-ksjl8b4tst/pr?sid=g9b&collection-tab-name=set+wet&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=FZVDW005Z063_AD&BU=Mixed
          - img "Image" [ref=e347]
        - link [ref=e354] [cursor=pointer]:
          - /url: /ai-nova-2-ultra-5g-blue-128-gb/p/itma055c78313c9e?pid=MOBHQZVX9JGVG3XF&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=CU9IJIR90LBJ_AD&BU=Mixed
          - img "Image" [ref=e357]
        - link [ref=e364] [cursor=pointer]:
          - /url: /televisions/~cs-bmpiy93rky/pr?sid=ckf%2Cczl&collection-tab-name=TCL+A400M+New+Launch&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OKJG96QCTOLK_AD&BU=Mixed
          - img "Image" [ref=e367]
        - link [ref=e374] [cursor=pointer]:
          - /url: /boltt-ace-5g-forest-green-64-gb/p/itm2eb0f483effdd?pid=MOBHPP59HXJA2QWH&param=8879898799048&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=LCBQM63VJP50_AD&BU=Mixed
          - img "Image" [ref=e377]
        - link [ref=e384] [cursor=pointer]:
          - /url: /clothing-and-accessories/bottomwear/jeans/~cs-1yczdm8571/pr?sid=clo%2Cvua%2Ck58&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DLEVI%2527S&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NZZHU4S05CO7_AD&BU=Mixed
          - img "Image" [ref=e387]
      - generic [ref=e410]:
        - link [ref=e415] [cursor=pointer]:
          - /url: /beauty-and-grooming/fragrances/pr?sid=g9b%2C0yh&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured&param=34567890&BU=BGM&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.brand%255B%255D%3Dblestaaa%2Bessentialss&param=09876543234567543&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=DSGRPGMVD3LJ_AD&BU=Mixed
          - img "Image" [ref=e418]
        - link [ref=e423] [cursor=pointer]:
          - /url: /osp/~cs-02k44t8edh/pr?sid=osp&collection-tab-name=Red+tape&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=IBFNAYMXTHH5_AD&BU=Mixed
          - img "Image" [ref=e426]
        - link [ref=e431] [cursor=pointer]:
          - /url: /bags-wallets-belts/luggage-travel/~cs-gf3o26zv20/pr?sid=reh%2Cplk&collection-tab-name=Safari_Magnum&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NFS2SGPYCP29_AD&BU=Mixed
          - img "Image" [ref=e434]
      - generic [ref=e444]:
        - generic [ref=e448]:
          - img "Image" [ref=e451]
          - generic [ref=e453]:
            - generic [ref=e454]: Best Value Deals on Fashion
            - link [ref=e456] [cursor=pointer]:
              - /url: /offers-list/best-value-deals-on-fashion?screen=dynamic&pk=contentTags%3DGCD_THEME_8%7Emarketplace%3DFLIPKART%7EwidgetType%3DdealCardV3%7EcontentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
        - generic [ref=e463]:
          - link "Image Men’s Slippers & Flip Flops Min. 70% Off" [ref=e468] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp%2Ccil%2Ce1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e478]
            - generic [ref=e481]:
              - generic [ref=e482]: Men’s Slippers & Flip Flops
              - generic [ref=e483]: Min. 70% Off
          - link "Image Men’s Casual Shoes Min. 70% Off" [ref=e488] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-28462d7669ffdf82990baaadbb6225e0/pr?sid=osp%2Ccil%2Ce1f&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e498]
            - generic [ref=e501]:
              - generic [ref=e502]: Men’s Casual Shoes
              - generic [ref=e503]: Min. 70% Off
          - link "Image Women's Sarees Special offer" [ref=e508] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-3bd49a8c44c9ba23a9d223ecf7511e45/pr?sid=clo%2C8on%2Czpd%2C9og&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e518]
            - generic [ref=e521]:
              - generic [ref=e522]: Women's Sarees
              - generic [ref=e523]: Special offer
          - link "Image Men’s Sports Shoes Min. 70% Off" [ref=e528] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6f5af2c6fd4068ce713d184f1481cd2b/pr?sid=osp%2Ccil%2C1cu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e538]
            - generic [ref=e541]:
              - generic [ref=e542]: Men’s Sports Shoes
              - generic [ref=e543]: Min. 70% Off
      - generic [ref=e553]:
        - generic [ref=e557]:
          - img "Image" [ref=e560]
          - generic [ref=e561]: Popular picks
        - generic [ref=e567]:
          - link "Image Grab Or Gone Under ₹399" [ref=e572] [cursor=pointer]:
            - /url: /all/~cs-fd79239415c52d377c004089d13cf601/pr?sid=eat%2C0pt&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkzOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJwcmljZV9yYW5nZSI6eyJyYW5nZVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJwcmljZV9yYW5nZSIsImluZmVyZW5jZVR5cGUiOiJGQUNFVCIsIm1pbiI6bnVsbCwibWF4IjozOTkuMCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJDSENFV1hFSFRIVDlFUU1CIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQ2hvY29sYXRlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e582]
            - generic [ref=e585]:
              - generic [ref=e586]: Grab Or Gone
              - generic [ref=e587]: Under ₹399
          - link "Image New Collection Up to 90% Off" [ref=e592] [cursor=pointer]:
            - /url: /all/~cs-3c9152a891dee5487cf15008ae2ca3de/pr?sid=clo%2Codx%2Cod7%2C0xx&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVcCB0byA5MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiR1dOR1RTS1lQS0JGTUFDSyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sImRpc2NvdW50X3JhbmdlX3YxIjp7InJhbmdlVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6ImRpc2NvdW50X3JhbmdlX3YxIiwiaW5mZXJlbmNlVHlwZSI6IkZBQ0VUIiwibWluIjpudWxsLCJtYXgiOjkwLjAsInZhbHVlVHlwZSI6IlJBTkdFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiSW4gRm9jdXMgTm93Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e602]
            - generic [ref=e605]:
              - generic [ref=e606]: New Collection
              - generic [ref=e607]: Up to 90% Off
          - link "Image Grab Or Gone Min. 80% Off" [ref=e612] [cursor=pointer]:
            - /url: /all/~cs-3dcafb11c717daaf4c26b9a0971045d8/pr?sid=clo%2Cqfl%2Cv5v%2Ckzg&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDgwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJCUkFINTdEVVE3WFlKU0RUIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjgwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJXb21lbidzIEJyYXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e622]
            - generic [ref=e625]:
              - generic [ref=e626]: Grab Or Gone
              - generic [ref=e627]: Min. 80% Off
          - link "Image Big Savings Special offer" [ref=e632] [cursor=pointer]:
            - /url: /all/~cs-c2e1fb4eb660b42e68d739f1cdcb04c0/pr?sid=tng%2C56a%2Cfq8%2Cgl8&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiUmVtb3RlIENvbnRyb2wgVG95IFZlaGljbGVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiUkNURzU2UzRTWUdIQk5KWSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e642]
            - generic [ref=e645]:
              - generic [ref=e646]: Big Savings
              - generic [ref=e647]: Special offer
      - generic [ref=e657]:
        - generic [ref=e658]: Brands in Spotlight
        - generic [ref=e663]:
          - link [ref=e668] [cursor=pointer]:
            - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&otracker=categorytree&p%5B%5D=facets.discount_range_v1%255B%255D%3D10%2525%2Bor%2Bmore&sort=popularity&p%5B%5D=facets.price_range.from%3D1500&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.brand%255B%255D%3DTitan&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=R6EOJVGGUK5C_AD&BU=Mixed
            - img "Image" [ref=e671]
          - link [ref=e676] [cursor=pointer]:
            - /url: http://flipkart.com/footwear/~cs-krnwdbkib4/pr?sid=osp&collection-tab-name=Action_BBD&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=74WSQ5NCS1WA_AD&BU=Mixed
            - img "Image" [ref=e679]
          - link [ref=e684] [cursor=pointer]:
            - /url: /mens-footwear/pr?sid=osp%2Ccil&otracker=nmenu_sub_Men_0_Footwear&p%5B%5D=facets.brand%255B%255D%3DPUMA&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=L7FN6CXQZOX7_AD&BU=Mixed
            - img "Image" [ref=e687]
      - generic [ref=e699]:
        - link [ref=e704] [cursor=pointer]:
          - /url: /triggr-kraken-x4-13mm-drivers-40ms-latency-enc-60h-battery-rubber-finish-v5-4-bluetooth-gaming/p/itm11fd34f2ddfb6?pid=ACCGPFCNADSRMQGJ&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=492AAXXOPUNN_AD&BU=Mixed
          - img "Image" [ref=e707]
        - link [ref=e712] [cursor=pointer]:
          - /url: /beauty-and-grooming/pr?sid=g9b&p%5B%5D=facets.brand%255B%255D%3DTHE%2BMAN%2BCOMPANY&otracker=categorytree&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=U7H36ZIIAV6L_AD&BU=Mixed
          - img "Image" [ref=e715]
        - link [ref=e720] [cursor=pointer]:
          - /url: /triggr-kraken-x4-13mm-drivers-40ms-latency-enc-60h-battery-rubber-finish-v5-4-bluetooth-gaming/p/itm11fd34f2ddfb6?pid=ACCGP2HJA3HKHTF4&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=A0NHW26M6BIC_AD&BU=Mixed
          - img "Image" [ref=e723]
      - generic [ref=e735]:
        - generic [ref=e736]:
          - link "Image Credit Card" [ref=e741] [cursor=pointer]:
            - /url: https://www.flipkart.com/fpg/cbc/store-page?productType=CC&utm_source=Allcat_OTA&utm_source_context=Allcat_nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNyZWRpdCBDYXJkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e744]
            - generic [ref=e745]: Credit Card
          - link "Image Flipkart EMI" [ref=e750] [cursor=pointer]:
            - /url: https://www.flipkart.com/rv/fpg/cfa/ntb/ce?emiType=cfa-term-loan&productCode=CREDIT_MARKETPLACE&utmSource=ADS&utmContext=FKEMI_Nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZsaXBrYXJ0IEVNSSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e753]
            - generic [ref=e754]: Flipkart EMI
          - link "Image Pay Later" [ref=e759] [cursor=pointer]:
            - /url: https://www.flipkart.com/rv/fpg/bnpl?utmSource=fk-fpl107&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSBMYXRlciJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e762]
            - generic [ref=e763]: Pay Later
          - link "Image For GenZ" [ref=e768] [cursor=pointer]:
            - /url: /ls-spl-26-gen-z-men-nonline-at-store?param=236896932&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZvciBHZW5aIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e771]
            - generic [ref=e772]: For GenZ
          - link "Image Flipkart Pay" [ref=e777] [cursor=pointer]:
            - /url: /flipkart-pay-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZsaXBrYXJ0IFBheSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e780]
            - generic [ref=e781]: Flipkart Pay
          - link "Image Sell Phone" [ref=e786] [cursor=pointer]:
            - /url: /reset-sell-store?param=3382&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNlbGwgUGhvbmUiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e789]
            - generic [ref=e790]: Sell Phone
          - link "Image Gift Cards" [ref=e795] [cursor=pointer]:
            - /url: /gift-card-at-store?param=7654567&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdpZnQgQ2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e798]
            - generic [ref=e799]: Gift Cards
          - link "Image BLACK" [ref=e804] [cursor=pointer]:
            - /url: /flipkart-black-store?param=389440&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJMQUNLIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e807]
            - generic [ref=e808]: BLACK
          - link "Image Originals" [ref=e813] [cursor=pointer]:
            - /url: /flipkart-originals-large-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk9yaWdpbmFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e816]
            - generic [ref=e817]: Originals
          - link "Image SuperCoin" [ref=e822] [cursor=pointer]:
            - /url: /supercoin?param=76523&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlN1cGVyQ29pbiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e825]
            - generic [ref=e826]: SuperCoin
          - link "Image Next Gen" [ref=e831] [cursor=pointer]:
            - /url: /nextgen-brands-spl-store?param=7478&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5leHQgR2VuIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e834]
            - generic [ref=e835]: Next Gen
        - button [ref=e836]
      - generic [ref=e848]:
        - generic [ref=e852]:
          - img "Image" [ref=e855]
          - generic [ref=e857]:
            - generic [ref=e858]: Trending Gadgets & Appliances
            - link [ref=e860] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1%7Emarketplace%3DFLIPKART%7EwidgetType%3DdealCardV3%7EcontentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
        - generic [ref=e867]:
          - link "Image Wrist Watches Min. 90% Off" [ref=e872] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-7fac62032f285fd41077836ef816b219/pr?sid=r18%2Cf13&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e882]
            - generic [ref=e885]:
              - generic [ref=e886]: Wrist Watches
              - generic [ref=e887]: Min. 90% Off
          - link "Image True Wireless Top Deals" [ref=e892] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-7847646c0fa813bb0b1d71a25db94e79/pr?sid=0pm%2Cfcn%2C821%2Ca7x%2C2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e902]
            - generic [ref=e905]:
              - generic [ref=e906]: True Wireless
              - generic [ref=e907]: Top Deals
          - link "Image Smart Watches Min. 40% Off" [ref=e912] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-21e789349087c946d1b57cb0a6372ff1/pr?sid=ajy%2Cbuh&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e922]
            - generic [ref=e925]:
              - generic [ref=e926]: Smart Watches
              - generic [ref=e927]: Min. 40% Off
          - link "Image Trimmers Min. 50% Off" [ref=e932] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw%2C79s%2Cby3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e942]
            - generic [ref=e945]:
              - generic [ref=e946]: Trimmers
              - generic [ref=e947]: Min. 50% Off
      - generic [ref=e957]:
        - generic [ref=e961]:
          - img "Image" [ref=e964]
          - generic [ref=e965]: Grab or gone
        - generic [ref=e971]:
          - link "Image Grab or gone Under ₹499" [ref=e976] [cursor=pointer]:
            - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D499&Param=5428&hpid=Y_24MmLeaVnmop7AmjyigKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrk0OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJFVEhIRkJQQVdWWVpZWEZQIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiS3VydGEgc2V0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e986]
            - generic [ref=e989]:
              - generic [ref=e990]: Grab or gone
              - generic [ref=e991]: Under ₹499
          - link "Image Eveready, Wipro & More From ₹89" [ref=e996] [cursor=pointer]:
            - /url: /home-lighting/utility-lighting/torches/pr?sid=jhg%2Cyqn%2Cdb9&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&hpid=Az6d2hhzukqaT7dGbDwRjqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTg5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiVE9IR1RSNjZEOEVHVFZDVSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlRvcmNoZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e1006]
            - generic [ref=e1009]:
              - generic [ref=e1010]: Eveready, Wipro & More
              - generic [ref=e1011]: From ₹89
          - link "Image Hurry up! Min 90% off" [ref=e1016] [cursor=pointer]:
            - /url: /home-decor/wall-decor-items/key-holders/pr?sid=arb%2Ca77%2C8js&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.discount_range_v1%255B%255D%3D90%2525%2Bor%2Bmore&param=8956&hpid=cpcr9xu2nK40ZB-h-nZtLKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gOTAlIG9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IktIUkhRQkc3M0daQUFGWUsiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJLZXkgaG9sZGVycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e1026]
            - generic [ref=e1029]:
              - generic [ref=e1030]: Hurry up!
              - generic [ref=e1031]: Min 90% off
          - link "Image Utility & more Min 70% Off" [ref=e1036] [cursor=pointer]:
            - /url: /clothing-and-accessories/bottomwear/cargos/pr?sid=clo%2Cvua%2Crqy&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.discount_range_v1%255B%255D%3D70%2525%2Bor%2Bmore&p%5B%5D=facets.trend_markers%3D1&param=34646&hpid=KeKG-KGdEodHWFOfsZkVg6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNzAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkNSR0hKNUVZTkFNV0dBSkoiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJTcG95bCBDYXJnb3MiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e1046]
            - generic [ref=e1049]:
              - generic [ref=e1050]: Utility & more
              - generic [ref=e1051]: Min 70% Off
      - generic [ref=e1061]:
        - generic [ref=e1062]: Featured Brands
        - generic [ref=e1068]:
          - generic [ref=e1069]:
            - link [ref=e1074] [cursor=pointer]:
              - /url: /boltt-evo-berry-red-64-gb/p/itmf046d663a1fd7?pid=MOBHPP598ENKRGBY&marketplace=FLIPKART&lid=LSTMOBHPP598ENKRGBYC3QECN&pageUID=1790076864560&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=L76PPXPPSNW3_AD&BU=Mixed
              - img "Image" [ref=e1077]
            - link [ref=e1082] [cursor=pointer]:
              - /url: /j9e/m38/~cs-bcu43z9w5e/pr?sid=j9e%2Cm38&collection-tab-name=Pigeon+-+Electric+Kettle+&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=4CY8WFX0BH5D_AD&BU=Mixed
              - img "Image" [ref=e1085]
            - link [ref=e1090] [cursor=pointer]:
              - /url: /mi-ac-m2-aa-portable-room-air-purifier/p/itm010273a3dfea6?pid=APFHQFBHVAYMBGZG&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=JGK2RAHEECCX_AD&BU=Mixed
              - img "Image" [ref=e1093]
            - link [ref=e1098] [cursor=pointer]:
              - /url: /6bo/b5g/~cs-5mcocoqw7m/pr?sid=6bo%2Cb5g&collection-tab-name=laptops&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=V294NCDH12HD_AD&BU=Mixed
              - img "Image" [ref=e1101]
            - link [ref=e1106] [cursor=pointer]:
              - /url: /boltt-evo-berry-red-64-gb/p/itmf046d663a1fd7?pid=MOBHPP598ENKRGBY&marketplace=FLIPKART&lid=LSTMOBHPP598ENKRGBYC3QECN&pageUID=1790156714591&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=4FBTRSHA8DO9_AD&BU=Mixed
              - img "Image" [ref=e1109]
            - link [ref=e1114] [cursor=pointer]:
              - /url: /laptops/~cs-rckdpoq00s/pr?sid=6bo%2Cb5g&collection-tab-name=chromebook&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=TZ21UVRW6Y57_AD&BU=Mixed
              - img "Image" [ref=e1117]
            - link [ref=e1122] [cursor=pointer]:
              - /url: /acerpure-nitro-108-cm-43-inch-qled-ultra-hd-4k-smart-google-tv-120-hz-gtv-5-0-android-14-dolby-vision-dolby-atmos-40w-sound-tuner-wi-fi-direct-allm-vrr-memc-karaoke-ai-gaming-wall-mount/p/itmca68400c27b94?pid=MIXHY2RKGQ8CKZYB&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ZYUEJD57EGRM_AD&BU=Mixed
              - img "Image" [ref=e1125]
            - link [ref=e1130] [cursor=pointer]:
              - /url: /r18/~cs-1478ew4xza/pr?sid=r18&collection-tab-name=Casio&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MNB6GQKY8D7I_AD&BU=Mixed
              - img "Image" [ref=e1133]
            - link [ref=e1138] [cursor=pointer]:
              - /url: /vehicles/bikes-scooters/~cs-vzuihn9l7o/pr?sid=7dk%2C0aj&collection-tab-name=TVS+Ronin&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=5QG5OCOJ2524_AD&BU=Mixed
              - img "Image" [ref=e1141]
            - link [ref=e1146] [cursor=pointer]:
              - /url: /ckf/czl/~cs-xvzip8mvef/pr?sid=ckf%2Cczl&collection-tab-name=TCL+P6L&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=L8TO94NDXYAY_AD&BU=Mixed
              - img "Image" [ref=e1149]
          - button [ref=e1150]
      - generic [ref=e1154]: Hang on, loading content
      - generic [ref=e1168]:
        - generic [ref=e1169]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1170]: +
      - contentinfo [ref=e1171]:
        - generic [ref=e1173]:
          - generic [ref=e1174]:
            - generic [ref=e1175]:
              - generic [ref=e1176]: ABOUT
              - link "Contact Us" [ref=e1177] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1178] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1179] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1180] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1181] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1182] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1183]:
              - generic [ref=e1184]: GROUP COMPANIES
              - link "Myntra" [ref=e1185] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1186] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1187] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1188]:
              - generic [ref=e1189]: HELP
              - link "Payments" [ref=e1190] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1191] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1192] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1193] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1194]:
              - generic [ref=e1195]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1196] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1197] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1198] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1199] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1200] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1201] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1202] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1203] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1204]:
              - generic [ref=e1205]: "Mail Us:"
              - generic [ref=e1206]:
                - paragraph [ref=e1207]: Flipkart Internet Private Limited,
                - paragraph [ref=e1208]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1209]: Clove Embassy Tech Village,
                - paragraph [ref=e1210]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1211]: Bengaluru, 560103,
                - paragraph [ref=e1212]: Karnataka, India
              - generic [ref=e1213]: "Social:"
              - generic [ref=e1214]:
                - link "Facebook" [ref=e1216] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1217]
                - link "Twitter" [ref=e1219] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1220]
                - link "YouTube" [ref=e1222] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1223]
                - link "Instagram" [ref=e1225] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1226]
            - generic [ref=e1227]:
              - generic [ref=e1228]: "Registered Office Address:"
              - generic [ref=e1229]:
                - paragraph [ref=e1230]: Flipkart Internet Private Limited,
                - paragraph [ref=e1231]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1232]: Clove Embassy Tech Village,
                - paragraph [ref=e1233]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1234]: Bengaluru, 560103,
                - paragraph [ref=e1235]: Karnataka, India
                - paragraph [ref=e1236]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1237]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1238] [cursor=pointer]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1239] [cursor=pointer]:
                    - /url: tel:044-67415800
          - generic [ref=e1240]:
            - generic [ref=e1241]:
              - img "Become a Seller" [ref=e1242]
              - link "Become a Seller" [ref=e1243] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1244]:
              - img "Advertise" [ref=e1245]
              - generic "Advertise" [ref=e1246]
            - generic [ref=e1247]:
              - img "Gift Cards" [ref=e1248]
              - link "Gift Cards" [ref=e1249] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1250]:
              - img "Help Center" [ref=e1251]
              - link "Help Center" [ref=e1252] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1253]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
```

# Test source

```ts
  1  | // Authore: Your Name
  2  | const { test, expect } = require('@playwright/test');
  3  | const { count } = require('node:console');
  4  | const { promises } = require('node:dns');
  5  | const { text } = require('node:stream/consumers');
  6  | 
  7  | test('Flipkart Order', async ({ browser }) => {
  8  | 
  9  |      const context = await browser.newContext();
  10 |      const page = await context.newPage();
  11 |      await page.goto("https://www.flipkart.com/");
  12 |      await page.locator(".b3wTlE").click();
  13 |      await page.getByPlaceholder("Search for Products, Brands and More").first()
  14 |           .fill("Mens shirts");
  15 |      await page.locator("[type='submit']").click();
  16 | 
  17 |      await page.locator(".p0C73x .atJtCj").first().waitFor();
  18 | 
  19 |      const products = await page.locator(".p0C73x .atJtCj");
  20 |      console.log(await products.count());
  21 | 
  22 |      const [newpage] = await Promise.all([
  23 | 
  24 |           context.waitForEvent('page'),
  25 |           await products.filter({ hasText: "Men Regular Fit Solid Button Down Collar Formal Shirt" }).click(),
  26 |      ]);
  27 | 
  28 |      await expect(newpage.locator("h1.v1zwn21n.v1zwn27._1psv1zeb9._1psv1ze0")).toHaveText('VeBNoR Men Regular Fit Solid Button Down Collar Formal Shirt');
  29 | 
  30 | 
  31 |      // await newpage.locator("div .css-146c3p1.r-dnmrzs.r-1udh08x.r-1udbk01.r-3s2u2q.r-1iln25a").click();
  32 |      // await newpage.getByRole("button", { name: 'Add to cart' }).first().waitFor();
  33 |      // await newpage.getByRole("button", { name: 'Add to cart' }).click();
  34 | 
  35 | 
  36 |      // newpage.locator(".css-g5y9jx.r-1udh08x.r-18u37iz.r-1777fci").click();
  37 |      // const Products = page
  38 |      //  .locator("[title='Men Regular Fit Solid Spread Collar Casual Shirt']");
  39 |      //const product = page.getByTitle
  40 |      //   ("Men Regular Fit Self Design Spread Collar Formal Shirt");
  41 | 
  42 |      await page.pause();
  43 | 
  44 | });
  45 | 
  46 | test.only('Dynamic Dropdown', async ({ page }) => {
> 47 |      await page.goto("https://www.flipkart.com/").waitFor();
     |                 ^ Error: page.goto: Test ended.
  48 |      await page.locator(".b3wTlE").click();
  49 |      await page.locator(".nw1UBF.v1zwn26").first().pressSequentially("watch");
  50 |      const dropdown = await page.locator(".VCplLH.lTpUwR");
  51 |      await dropdown.waitFor();
  52 |      const optionscount = await dropdown.locator("li").count();
  53 |      for (let i = 0; i < optionscount; i++) {
  54 | 
  55 |           const text = await dropdown.locator("li").nth(i).textContent();
  56 |           //if(text.includes("boys"))
  57 |           if (text === "watch for boys") {
  58 |                await dropdown.locator("li").nth(i).click();
  59 |                break;
  60 |           }
  61 |      }
  62 | 
  63 | });
  64 | 
  65 | 
  66 | 
```