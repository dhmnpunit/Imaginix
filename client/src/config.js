const config = {
    backendUrl: process.env.NODE_ENV === 'production' 
        ? '/api' 
        : 'http://localhost:4000'
}

export default config