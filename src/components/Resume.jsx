//  import pdf from '../../public/Q&A.pdf'
import { FaDownload } from "react-icons/fa";
// const pdf_download = '/Q&A.pdf'
const Resume = () => {
    const handleDownload = (url) => {
        fetch(url)
            .then(res => res.blob())
            .then(blob => {

                const blobURL = window.URL.createObjectURL(blob);
                const fileName = url.split("/").pop();
                const aTag = document.createElement("a");
                aTag.href = blobURL;
                aTag.setAttribute("download", fileName);
                document.body.appendChild(aTag);
                aTag.click();
                document.body.removeChild(aTag);
                window.URL.revokeObjectURL(blobURL);
            })
            .catch(error => {
                console.error("Error downloading file:", error);
            });
    };


    return (
        <div>
            {/* <button onClick={() => handleDownload(pdf_download)}>Download PDF</button> */}
            <button onClick={() => handleDownload(pdf_download)}
                className='font-bold border-2 px-4 py-4 rounded-r-xl rounded-l-xl btn btn-outline btn-success text-black hover:text-white '>Download Resume <FaDownload/></button>
        </div>

    );
};

export default Resume;