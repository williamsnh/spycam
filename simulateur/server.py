from fastapi import FastAPI
from fastapi.responses import Response
from PIL import Image, ImageDraw
import io

app = FastAPI()

@app.get("/frame")
def frame():
    img = Image.new("RGB", (640, 480), color=(20, 20, 24))
    draw = ImageDraw.Draw(img)
    draw.text((10, 10), "Hello spycam", fill=(255, 255, 255))

    buf = io.BytesIO()
    img.save(buf, format="JPEG")
    return Response(content=buf.getvalue(), media_type="image/jpeg")