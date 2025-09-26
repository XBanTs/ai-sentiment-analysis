from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

"""
Sentiment Analysis API Server

This Flask application provides a REST API endpoint for sentiment analysis using the DistilBERT model.
The server accepts text input and returns sentiment analysis results (positive/negative) with confidence scores.

Dependencies:
    - Flask: Web framework for the API
    - transformers: Hugging Face's transformers library for NLP tasks
    - flask_cors: Handle Cross-Origin Resource Sharing (CORS)
"""

app = Flask(__name__)
CORS(app, resources={r"/analyze": {"origins": "https://ai-sentiment-analysis.vercel.app"}})

# Configuration for the sentiment analysis model
SENTIMENT_MODEL_NAME = "distilbert/distilbert-base-uncased-finetuned-sst-2-english"
SENTIMENT_MODEL_REVISION = "714eb0f"

# Initialize the sentiment analysis pipeline
# Using PyTorch (default) since the model is PyTorch-native
sentiment_classifier = pipeline(
    task="sentiment-analysis",
    model=SENTIMENT_MODEL_NAME,
    revision=SENTIMENT_MODEL_REVISION
)

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    """
    Endpoint to analyze the sentiment of provided text.
    
    Expected JSON payload:
    {
        "text": "string of text to analyze"
    }
    
    Returns:
    - Success: JSON object containing sentiment analysis result
        {
            "sentiment": {
                "label": "POSITIVE/NEGATIVE",
                "score": float (confidence score)
            }
        }
    - Error: JSON object with error message and 400 status code
        {
            "error": "error message"
        }
    """
    request_data = request.json
    input_text = request_data.get('text', '')

    # Validate input
    if not input_text:
        return jsonify({
            "error": "No text provided. Please include 'text' field in your request."
        }), 400

    try:
        # Perform sentiment analysis
        analysis_result = sentiment_classifier(input_text)
        
        # Return the analysis result
        return jsonify({
            "sentiment": analysis_result[0]
        })
    
    except Exception as e:
        return jsonify({
            "error": f"Analysis failed: {str(e)}"
        }), 500
