// Import the necessary modules and types
import { DidToCidMapping } from '@/types/did-mapping';
import { FilecoinClient } from 'filecoin-api-client';

// Initialize Filecoin client
const filecoinClient = new FilecoinClient();

const mapping: DidToCidMapping = {};

// Upload Function
async function uploadMarkdownFile(did: string, content: string): Promise<string> {
  try {
    // Use the Filecoin client to initiate the upload
    const cid = await filecoinClient.upload(content);

    // Store the mapping of DID to CID in your application's database or smart contract
    // For simplicity, you might use an in-memory JavaScript object
    mapping[did] = cid;

    // Return the CID of the uploaded content
    return cid;
  } catch (error: any) {
    // Handle errors appropriately
    console.error('Upload to Filecoin failed:', error.message);
    throw error;
  }
}

// Read Function
async function readMarkdownFile(did: string): Promise<string | null> {
  try {
    // Retrieve the CID associated with the given DID from your application's database or smart contract
    // For simplicity, use the in-memory JavaScript object from the previous example
    const cid = mapping[did];

    if (!cid) {
      console.error('CID not found for the given DID');
      return null;
    }

    // Use the Filecoin client to retrieve content based on CID
    const content = await filecoinClient.retrieve(cid);

    // Return the content retrieved from Filecoin
    return content;
  } catch (error: any) {
    // Handle errors appropriately
    console.error('Read from Filecoin failed:', error.message);
    throw error;
  }
}

export { uploadMarkdownFile, readMarkdownFile };
