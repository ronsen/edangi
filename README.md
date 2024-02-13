### Edangi

Random API for fun.

| Name | URL |
| :- | :- |
| Tahukah Anda | `/api/tahukah-anda` |
| Did You Know | `/api/did-you-know` |
| Ayat Acak | `/api/ayat-acak` |
| Random Bible Verse | `/api/random-bible-verse` |

### Docker

Building Docker image:

```
docker build -t edangi .
```

Run the container:

```
docker run -it -p 3000:3000 edangi
```