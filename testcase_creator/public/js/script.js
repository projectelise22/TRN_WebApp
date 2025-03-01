document.getElementById("proj-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Stop default form submission

    const projName = document.getElementById("proj-name").value.trim();
    const projDesc = document.getElementById("proj-desc").value.trim();

    console.log("📤 Sending data:", { projName, projDesc });

    if (!projName || !projDesc) {
        alert("⚠️ Both fields are required!");
        return;
    }

    try {
        const response = await fetch("/submit", {  // ✅ CORRECT ENDPOINT
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ projName, projDesc }),
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        console.log("📩 Server response:", data);

        alert(`✅ ${data.message}`);
        closeModal();
    } catch (error) {
        console.error("❌ Fetch error:", error);
        alert("❌ Submission failed. Check the console for errors.");
    }
});

// Open and close modal functions
function openCreateProjWindow() {
    document.getElementById("new-proj").style.display = "block";
}

function closeModal() {
    document.getElementById("new-proj").style.display = "none";
}
