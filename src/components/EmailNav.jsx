import { FaBeer } from 'react-icons/fa';

function EmailNav() {
    return (
        <div style={{ height: 900, width: 300, backgroundColor: "white"}}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ height: 200, width: 300, backgroundColor: "#0c7ead", textAlign: "center", lineHeight: 12 }}>
                    <p style={{ fontWeight: "bold", color: "white" }}>Compose</p>
                    <FaBeer/>
                </div>
                <div style={{ height: 100, width: 300, backgroundColor: "#4D4D4D" }}>
                    <p style={{ color: "white" }}>Inbox</p>
                </div>
                <div style={{ height: 100, width: 300, backgroundColor: "#4D4D4D" }}>
                    <p>Sent</p>
                </div>
                <div style={{ height: 100, width: 300, backgroundColor: "#4D4D4D" }}>
                    <p>Drafts</p>
                </div>
                <div style={{ height: 100, width: 300, backgroundColor: "#4D4D4D" }}>
                    <p>Trash</p>
                </div>
            </div>
        </div>
    );
}
export default EmailNav;