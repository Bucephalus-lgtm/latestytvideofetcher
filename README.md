
<h1 align="center">
🌐 Youtube Video Fetcher
</h1>
<p align="center">
A webapp to demonstrate an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.
</p>

> - The **Youtube Search API** is used to fetch new entries every 10 seconds
> - The entries are then written to the database (in a table named **Video**)
> - Finally, the entries are rendered in the frontend
> - Pagination is now available on the client side
> - Search the video entries by it's title or description

## Access Code(Either Git repository or Replit project)

First clone the git repository...
```
$ git clone https://github.com/Bucephalus-lgtm/latestytvideofetcher
```

The server codebase can be found in the root directory (since server branch is the default branch here)
Or you can also visit: [Server side Repl](https://replit.com/@BhargabNath/YTVideoFetcherServer)  to look over the serverside codebase

To look over the client side codebase, either run
```
$ git checkout client
```
Or visit: [Client Side Repl](https://replit.com/@BhargabNath/YTVideoFetcherClient)

To go through the cronjob scheduling related codebase, either run
```
$ git checkout cronjob
```
Or visit: [Cron Job Repl](https://replit.com/@BhargabNath/YTVideoFetcherCronJob)

# Usage (run the app on your machine)

## Prerequisites

- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

## Author

[Bhargab Nath](https://github.com/Bucephalus-lgtm)
