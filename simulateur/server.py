from fastapi import FastAPI, WebSocket
from fastapi.responses import StreamingResponse
from PIL import Image, ImageDraw
import io
import time

app = FastAPI()

def generate_frames():
    while True:
        img = Image.new("RGB", (640, 480), color=(20, 20, 24))
        draw = ImageDraw.Draw(img)
        draw.text((10, 10), f"t={time.time():.1f}", fill=(255, 255, 255))

        buf = io.BytesIO()
        img.save(buf, format="JPEG")
        frame = buf.getvalue()

        yield (b"--frame\r\nContent-Type: image/jpeg\r\n\r\n" + frame + b"\r\n")
        time.sleep(0.2)

@app.get("/stream")
def stream():
    return StreamingResponse(generate_frames(), media_type="multipart/x-mixed-replace; boundary=frame")

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        message = await websocket.receive_text()
        print("Reçu:", message)