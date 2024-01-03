import sanitizeHtml from 'sanitize-html';

const sanitize = (html: string) => {
  return sanitizeHtml(html);
};

export default sanitize;
