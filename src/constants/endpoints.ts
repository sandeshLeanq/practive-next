export const baseUrl:string | undefined = process.env.NEXT_PUBLIC_BASE_URL ??""

export const endpoints ={
    movies: (query:string)=> baseUrl + `&s=${query}`,
}