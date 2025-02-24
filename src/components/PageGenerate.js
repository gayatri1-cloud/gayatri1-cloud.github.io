import { Stack } from "@mui/material";

export default function PageGenerate({title}){

    const renderHeader = () => null;
    const renderFooter = () => null;
    const renderSvg = () => <iframe 
    src={`/${title}.svg`}
    style={{
        border: 'none',
        width: '100vw',
        height: '100vh',
    }}
    />

    return (
        <Stack width={"100%"} height={"100%"} sx={{backgroundColor: "#ffffff"}}>
            {renderHeader()}
            {renderSvg()}
            {renderFooter()}
        </Stack>

    );
}