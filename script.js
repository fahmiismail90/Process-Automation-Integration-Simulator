const runBtn = document.getElementById('run-btn');
const workflowSelect = document.getElementById('workflow-select');
const statusBadge = document.getElementById('status-badge');
const logOutput = document.getElementById('log-output');
const mStatus = document.getElementById('m-status');
const mCount = document.getElementById('m-count');
const mTime = document.getElementById('m-time');

const scenarios = {
    'goods-receipt': [
        "Initializing UiPath Robot Session...",
        "Connecting to SAP GUI instance (Client 100)...",
        "Executing transaction code MB01 / MIGO...",
        "Validating Purchase Order header and line items...",
        "Posting Material Document successfully. Doc ID: 50029381...",
        "Pipeline executed successfully."
    ],
    'warehouse-inbound': [
        "Starting Unattended RDP Robot Worker #02...",
        "Connecting to Warehouse Management (WM) module...",
        "Processing inbound delivery notification from ASN stream...",
        "Executing transaction LT04 (Create Transfer Order for Delivery)...",
        "Assigning bin storage locations across zone C-04...",
        "Confirming Transfer Order via LT12. Status: Verified...",
        "Inbound logistics pipeline completed successfully."
    ],
    'invoice-cancel': [
        "Initializing background runner...",
        "Authenticating session against SAP ECC backend...",
        "Accessing transaction MR8M (Reverse Accounting Document)...",
        "Validating fiscal year and reversal reason code...",
        "Reversal document posted successfully. Ref: 1900284...",
        "Pipeline executed successfully."
    ],
    'idoc-outbound': [
        "Triggering scheduled batch job via SA38...",
        "Extracting Merchandise Category outbound IDocs...",
        "Serializing payload to XML mapping structure...",
        "Pushing data stream to integration middleware endpoint...",
        "Transmission acknowledged by target node.",
        "Pipeline executed successfully."
    ]
};
