import sys
import yt_dlp

url = 'https://www.facebook.com/reel/2485736138606550/?fs=e&mibextid=wwXIfr&rdid=lmi5id3iH7sxgKhm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F19KrKWohvG%2F%3Fmibextid%3DwwXIfr#'

ydl_opts = {
    'outtmpl': 'D:\\videos\\facebook_reel_%(id)s.%(ext)s',
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download([url])

print("Downloaded successfully.")
