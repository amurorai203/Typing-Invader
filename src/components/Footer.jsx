import { Typography } from "@mui/material";

export default function Jumbotron() {
    return (
        <Typography variant="footer" component="div" gutterBottom>
            <footer className="footer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="align-bottom">
                    <p>
                        &copy; Powered by Github. With edX Front-End Web Development
                        program.
                    </p>
                </div>
            </footer>
        </Typography>
    );
}
