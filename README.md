# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
# Google Sheets Catalog

The catalog can be managed from a phone through Google Sheets. Create a sheet with this first row:

`id,description,imageUrl,imageHint,reelUrl,price`

For each product, use an ID such as `catalog-1`, paste the Instagram Reel URL in `reelUrl`, and paste the Google Drive sharing link in `imageUrl`. For Drive images, set the file to **Anyone with the link -> Viewer**. The site converts the sharing link automatically.

Make the Google Sheet publicly readable, then copy its ID from the URL:

`https://docs.google.com/spreadsheets/d/SHEET_ID/edit`

Put that ID in `.env` as `NEXT_PUBLIC_GOOGLE_SHEET_ID`. If the data is on another tab, put that tab's `gid` in `NEXT_PUBLIC_GOOGLE_SHEET_GID`. Restart the development server after changing `.env`. After the site is deployed once, changes to the Sheet appear on the next page refresh without code changes.
