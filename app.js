document.getElementById('scan-btn').addEventListener("click", () => {
    const urlInput = document.getElementById("url-input").value;
    
    if (urlInput === null || urlInput.trim() === "") {
        alert("Please map a valid URL objective target.");
        return;
    }

    // Dom elements target states
    const scannerView = document.getElementById("scanner-view");
    const resultsMatrix = document.getElementById("results-matrix");
    const statusLog = document.getElementById("status-log");

    // Reset views for consecutive scans
    scannerView.classList.remove("hidden");
    // resultsMatrix.classList.add("hidden");

    // Simulate multi-agent background workflow pipeline processing
    const workflows = [
        { time: 1000, log: "Isolating target engine inside structural virtual frame..." },
        { time: 2500, log: "Layer 1 Pipeline: Compiling Lexical Entropy and Domain age tokens..." },
        { time: 4000, log: "Layer 2 Pipeline: Passing viewport screenshots to Visual Brand models..." },
        { time: 5500, log: "Layer 3 Pipeline: Parsing full-scale text structures via NLP Transformers..." },
        { time: 7000, log: "Synthesizing individual vectors into deep risk weighting index..." }
    ];

    workflows.forEach((phase) => {
        setTimeout(() => {
            statusLog.innerText = phase.log;
        }, phase.time);
    });

    // Display the dashboard components when calculations complete
    setTimeout(() => {
        scannerView.classList.add("hidden");
        resultsMatrix.classList.remove("hidden");
        
        // Visual scroll update
        resultsMatrix.scrollIntoView({ behavior: "smooth" });
    }, 8500);
});

