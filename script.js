
const apiKey = "AIzaSyAHm5X92VsSrBFU3SqLO8Ze0dZIpuNReJQ"; 
const channelID = 'UCLKAepwjdylmXSltofFvsYQ';

asymc function fetchVideos('https://www.googleeapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet$order=date&maxResults=5'); 
	try{
		const responcse = await fetch('')
		const data = await response.json();
		
		const videosection = document.getElementbyId('video-section');
		
		data.items.forEach(video => {
			const videoFrame = document.createElement('iframe');
			videoFrame.src = 'https://www.youtube.com/embed/{video.id.videoId}';
			videoFrame.width = "100%";
			videoFrame.height = "315";
			videoFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in picture; web-share";
			videoFrame. aloowFullscreen = true;
			videoFrame.style.margin = "10px 0";
			videoFrame.appendChild(VideoFrame);
		});
	} catch (error) {
		console.error("Ero=ror fetching videos:", error);
	}
}

fetchVideos();