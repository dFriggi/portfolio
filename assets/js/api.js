

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/dFriggi/portfolio/refs/heads/main/json/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}
