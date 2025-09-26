import React, { useState } from "react";
import { analyzeSentiment } from "./services/api";

/**
 * Main Application Component for Sentiment Analysis
 * 
 * This component provides a user interface for sentiment analysis of text input.
 * Users can enter text, submit it for analysis, and view the sentiment results
 * or any error messages that occur during the process.
 * 
 * @returns {JSX.Element} The rendered application component
 */
function App() {
    // State for user input text
    const [userInputText, setUserInputText] = useState("");
    // State for storing sentiment analysis results
    const [sentimentResult, setSentimentResult] = useState(null);
    // State for handling error messages
    const [errorMessage, setErrorMessage] = useState(null);

    /**
     * Handles the sentiment analysis process when user clicks the analyze button
     * Communicates with the backend API and updates the UI accordingly
     */
    const handleSentimentAnalysis = async () => {
        try {
            // Reset previous results and errors
            setErrorMessage(null);
            setSentimentResult(null);

            // Call API to analyze sentiment
            const response = await analyzeSentiment(userInputText);
            setSentimentResult(response.data.sentiment);
        } catch (error) {
            setErrorMessage("An error occurred while analyzing sentiment. Please try again.");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
            <h1>AI Sentiment Analysis Feedback App</h1>
            <p>Enter text to analyze its sentiment (Positive/Negative)</p>
            
            {/* Text input area for user feedback */}
            <textarea
                value={userInputText}
                onChange={(event) => setUserInputText(event.target.value)}
                placeholder="Enter your feedback here..."
                style={{ width: "100%", height: "100px", marginBottom: "10px" }}
                aria-label="Text input for sentiment analysis"
            />

            {/* Analysis trigger button */}
            <button 
                onClick={handleSentimentAnalysis} 
                style={{ padding: "10px", cursor: "pointer" }}
                aria-label="Analyze sentiment"
            >
                Analyze Sentiment
            </button>

            {/* Display sentiment analysis results */}
            {sentimentResult && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Result:</h3>
                    <p><strong>Label:</strong> {sentimentResult.label}</p>
                    <p><strong>Score:</strong> {sentimentResult.score.toFixed(2)}</p>
                </div>
            )}

            {/* Display error message if any */}
            {errorMessage && (
                <p style={{ color: "red" }} role="alert">
                    {errorMessage}
                </p>
            )}
        </div>
    );
}

export default App;