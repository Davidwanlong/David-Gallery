const apiKey = '834c36f745871be9910e8214be3d5e00';
const searchQuery = 'oil painting';

fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchQuery}&format=json&nojsoncallback=1`)
  .then(response => response.json())
  .then(data => {
    const photos = data.photos.photo;
    const archivesContainer = document.querySelector('.archives-container'); 

    photos.forEach(photo => {
      const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
      
      // 创建图片元素
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.alt = photo.title;

      // 创建一个包裹图片的 div
      const photoWrapper = document.createElement('div');
      photoWrapper.classList.add('photo-wrapper');
      photoWrapper.appendChild(imgElement);

      // 将图片添加到 service-container
      archivesContainer.appendChild(photoWrapper);
    });
  })
  .catch(error => console.error('Error fetching data:', error));