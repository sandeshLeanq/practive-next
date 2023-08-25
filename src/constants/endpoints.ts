export const baseUrl:string | undefined = process.env.NEXT_PUBLIC_BASE_URL ??""

export const endpoints ={
    movies:baseUrl + "&s=titanic",
    movieSearch: (query:string)=> baseUrl + `&s=${query}`
}