import {GoogleGenAI} from '@google/genai'

// Initialize the Gemini client
const ai=new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY 
})

async function generateContentFromGemini(prompt){

    const response=await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:prompt
    })

    // return response.data.choices[0].content
    // return response.data.choices[0].message.content
    // return response.data.choices[0].message.text
    // return response.data.choices[0].text
    return response.text 
}

export default generateContentFromGemini ;
