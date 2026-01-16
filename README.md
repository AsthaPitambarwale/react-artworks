# Art Institute of Chicago – Artworks Table

This project is a React + TypeScript application built as part of a technical assignment.  
It displays artworks from the Art Institute of Chicago public API using a paginated data table with persistent row selection.
Project Live on: https://artworks-react.netlify.app/

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **PrimeReact**
- **Axios**

## Project Structure
```
src/
├── api/
│   └── artworksApi.ts        # API calls (server-side pagination)
│
├── components/
│   ├── ArtTable.tsx          # Main data table & logic
│   └── SelectRowsDialog.tsx  # Custom row selection dialog
│
├── styles/
│   └── global.css            # Global styles
│
├── App.tsx                   # App entry
├── main.tsx                  # React bootstrap

```
## API Used

**Art Institute of Chicago API**

```
[https://api.artic.edu/api/v1/artworks?page={page}](https://api.artic.edu/api/v1/artworks?page={page})
```

## Testing Checklist

### Functional Testing
- Pagination loads only one page at a time
- Selected rows persist after page navigation
- Custom row selection works correctly
- Sorting does not break selection

### Edge Cases
- Selecting more rows than available on page
- Navigating back to a previously visited page
- Invalid custom input does not crash the app

### Performance
- No full dataset storage
- No unnecessary API calls

## Running Locally

```bash
npm install
npm run dev
````

Open in browser:

```
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

The production build will be generated in the `dist/` folder.

## Deployment

Netlify Settings

* Build Command: `npm run build`
* Publish Directory: `dist`

## Author

**Astha Pitambrwale**

This project was created as part of a technical assessment and follows all provided guidelines.

## Assignment Compliance

* ✔ React + TypeScript
* ✔ PrimeReact DataTable
* ✔ Server-side pagination
* ✔ Persistent selection
* ✔ No forbidden frameworks or platforms used
