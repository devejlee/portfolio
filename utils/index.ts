// records data on each page visited
export const pageView = (url: string) => {
  window.gtag('config', 'G-ZEPKB6XPR7', {
   page_path: url
  });
};

// handles any custom event we want to track. For eg. how many clicks has our subscribe button
export const event = ({action, category, label, value}: any) => {
  window.gtag('event', action, {
   event_category: category,
   event_label: label,
   value: value
 });
};