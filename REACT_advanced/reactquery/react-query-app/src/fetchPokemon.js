function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async(key, {id}) =>{
    await sleep(1000);
    const response = await fetch(`https://d1s1rehmg7ei44.cloudfront.net/api/v2/pokemon/${id}`);

    return response.json();
};