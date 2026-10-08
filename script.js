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

runBtn.addEventListener('click', async () => {
    const selectedScenario = workflowSelect.value;
    const logs = scenarios[selectedScenario];

    // Reset UI state
    runBtn.disabled = true;
    statusBadge.textContent = "Running";
    statusBadge.className = "badge running";
    mStatus.textContent = "In Progress";
    mCount.textContent = "0";
    mTime.textContent = "0.0s";
    logOutput.textContent = "";

    let startTime = performance.now();
    let step = 0;

    const interval = setInterval(() => {
        if (step < logs.length) {
            logOutput.textContent += `[${new Date().toLocaleTimeString()}] ${logs[step]}\n`;
            logOutput.scrollTop = logOutput.scrollHeight;
            mCount.textContent = step + 1;
            let elapsed = ((performance.now() - startTime) / 1000).toFixed(1);
            mTime.textContent = `${elapsed}s`;
            step++;
        } else {
            clearInterval(interval);
            statusBadge.textContent = "Completed";
            statusBadge.className = "badge success";
            mStatus.textContent = "Success";
            runBtn.disabled = false;
        }
    }, 700);
});
