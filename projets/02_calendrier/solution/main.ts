const today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

function fillHeader(): void {
    const header = document.querySelector("#year-month") as HTMLElement;
    header.textContent = today.toLocaleDateString("fr", {
        month: "long",
        year: "numeric",
    });
}

function fillBody(): void {
    let date = new Date(currentYear, currentMonth, 1);
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    rows.forEach((row, y) => {
        const cells = Array.from(row.querySelectorAll("td"));
        cells.forEach((cell, x) => {
            const i = y * cells.length + x;
            const isLastMonth = i < firstDayOfMonth.getDay();
            const isNextMonth = date.getMonth() !== currentMonth;
            if (isLastMonth || isNextMonth) return;
            const isToday = date.getDate() === currentDate;
            if (isToday) cell.classList.add("today");
            cell.textContent = date.getDate().toString();
            date = new Date(currentYear, currentMonth, date.getDate() + 1);
        });
    });
}

function main(): void {
    fillHeader();
    fillBody();
}

main();
