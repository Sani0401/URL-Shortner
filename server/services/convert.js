import shortid from 'shortid';
import supabase from '../config/supabaseConfig.js';

async function convertLink(req, res) {
  try {
    const { originalUrl } = req.body;
    if (!originalUrl) {
      return res.status(400).json({ error: 'Original URL is required' });
    }

    const shortId = shortid.generate();
    console.log(shortId);
    const shortUrl = `http://localhost:3000/${shortId}`;

    const { error } = await supabase
      .from('URLS')
      .insert({ id: shortId, actualURL: originalUrl, shortURL: shortUrl, count: 0 });

    if (error) {
      throw error;
    }

    res.json({ shortUrl });
  } catch (error) {
    console.error('Error creating short URL:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export default convertLink;
