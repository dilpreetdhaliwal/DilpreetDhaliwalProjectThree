
import React, { useState, useEffect } from "react";

const MemeGenerator = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [memeUrl, setMemeUrl] = useState("");
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");

  // Fetch meme templates from the Imgflip API (using result to extract data)
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(result => result.json())
      .then(data => {
        console.log("templates:", data.data.memes);
        setTemplates(data.data.memes);
        setSelectedTemplate(data.data.memes[0]); // Set the first template as the default
      })
  }, []);

  const createMeme = () => {
    console.log("CREATE MEME");
    const params = new URLSearchParams({
      template_id: selectedTemplate.id,
      username: "DilpreetDhaliwal1",
      password: "imgFlipPass1",
      text0: text0,
      text1: text1,
    });
  
    // convert API data (response) using params info
    fetch(`https://api.imgflip.com/caption_image?${params}`)
      .then(response => response.json())
      .then(data => {
        console.log("data:", data);
        setMemeUrl(data.data.url);
      })
      .catch(error => console.error(error));
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template)
  }

  const handleText0Change = e => {
    setText0(e.target.value);
  };

  const handleText1Change = e => {
    setText0(e.target.value);
  };

  return (
    <div>
      <h1>Meme Generator</h1>


      {selectedTemplate && (
        <div className="selectedTemplate">
          <img src={selectedTemplate.url} alt={selectedTemplate.name} />
          <div className="textInputs">
            <input 
              type="text" 
              placeholder="Enter top text" 
              value={text0} 
              onChange={handleText0Change}
              maxLength={20}
            />
            <span>{text0.length}/{20}</span>
            <input 
              type="text" 
              placeholder="Enter bottom text" 
              value={text1} 
              onChange={handleText1Change}
              maxLength={20}
            />
            <span>{text1.length}/{20}</span>
          </div>
          <button onClick={createMeme}>Create Meme</button>
        </div>
      )}

      {memeUrl && (
        <div className="generatedMeme">
          <img src={memeUrl} alt="User created meme" />
        </div>
      )}
      
      <div className="templatesContainer">
        {templates.map(template => (
          <div key={template.id} className="templateItem" onClick={() => handleTemplateChange(template)}>
            <img src={template.url} alt={template.name} />
            <p>{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeGenerator;



