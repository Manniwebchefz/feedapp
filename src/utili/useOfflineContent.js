const useOfflineContent = () => {
    return (
        <div className="offline-page">
            <div className="offline-card">
                <div className="wifi-icon">📡</div>
                <span className="offline-badge">🔴 OFFLINE</span>

                <h1>Oops! You're disconnected</h1>

                <p>
                    Looks like your internet took a little break.
                    Let's get you back to the delicious stuff!
                </p>

                <button onClick={() => window.location.reload()}>
                    <span>↻</span> Try Again
                </button>

                <small>
                    Check your Wi-Fi or mobile data connection
                </small>
            </div>
        </div>
    );
}

export default useOfflineContent;