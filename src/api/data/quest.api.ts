export default async function CompletedQuest(questId: string, image: Base64URLString){
    const response = await fetch("http://localhost:5000/cleanquest/quest/completed-quest", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
            questId: questId,
            image: image
        })
    })

    const data = await response.json();

    if(!response.ok){
        console.log(data)
        return data;
    } 
    return data;
}