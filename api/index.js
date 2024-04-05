const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.json());

app.get('/tutorials', (req, res) => {
  const tutorials = [
    {
      tutorial: "https://www.youtube.com/watch?v=-MTSQjw5DrM&t=1s",
      channel: "youtube"
    },
    {
      tutorial: "https://www.youtube.com/watch?v=6eGxZbrVpSA",
      channel: "irene"
    }
  ];

  const articles = [
    {
      id: 1,
      articleLink: "https://www.epicgardening.com/hydroponics-for-beginners/",
      title: "Hydroponics for Beginners",
      author: "",
      summary: "",
    },
    {
      id: 2,
      articleLink: "https://aggie-horticulture.tamu.edu/wp-content/uploads/sites/13/2018/06/Drip-Irrigation-Operation-and-Management.pdf"
    },
    {
      id: 3,
      articleLink: "https://avisomo.com/how-to-get-started-with-vertical-farming/"
      
    }

  ];

  res.status(200).send({
    tutorials: tutorials,
    articles: articles
  });
});



app.post('/tutorials', (req, res) => {
  const { tutorial } = req.body;

  if (!tutorial) {
    return res.status(418).send({ message: "We need one" });
  }

 
  console.log('New tutorial received:', tutorial);  
  res.send({
    message: 'Tutorial created successfully!'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});



