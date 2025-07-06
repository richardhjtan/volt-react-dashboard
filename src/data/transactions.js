import dayjs from "dayjs";

export default [
    {
        "invoiceNumber": 300500,
        "status": "Paid",
        "subscription": "Platinum Subscription Plan",
        "price": "799,00",
        "issueDate": dayjs().subtract(1, "days").format("DD MMM YYYY"),
        "dueDate": dayjs().subtract(1, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300499,
        "status": "Paid",
        "subscription": "Platinum Subscription Plan",
        "price": "799,00",
        "issueDate": dayjs().subtract(2, "days").format("DD MMM YYYY"),
        "dueDate": dayjs().subtract(2, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300498,
        "status": "Paid",
        "subscription": "Platinum Subscription Plan",
        "price": "799,00",
        "issueDate": dayjs().subtract(2, "days").format("DD MMM YYYY"),
        "dueDate": dayjs().subtract(2, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300497,
        "status": "Paid",
        "subscription": "Flexible Subscription Plan",
        "price": "233,42",
        "issueDate": dayjs().subtract(3, "days").format("DD MMM YYYY"),
        "dueDate": dayjs().subtract(3, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300496,
        "status": "Due",
        "subscription": "Gold Subscription Plan",
        "price": "533,42",
        "issueDate": dayjs().subtract(1, "day").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": dayjs().subtract(1, "day").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300495,
        "status": "Due",
        "subscription": "Gold Subscription Plan",
        "price": "533,42",
        "issueDate": dayjs().subtract(3, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": dayjs().subtract(3, "days").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300494,
        "status": "Due",
        "subscription": "Flexible Subscription Plan",
        "price": "233,42",
        "issueDate": dayjs().subtract(4, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": dayjs().subtract(4, "days").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300493,
        "status": "Canceled",
        "subscription": "Gold Subscription Plan",
        "price": "533,42",
        "issueDate": dayjs().subtract(20, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": dayjs().subtract(20, "days").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300492,
        "status": "Canceled",
        "subscription": "Platinum Subscription Plan",
        "price": "799,00",
        "issueDate": dayjs().subtract(2, "months").format("DD MMM YYYY"),
        "dueDate": dayjs().subtract(3, "months").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300491,
        "status": "Paid",
        "subscription": "Platinum Subscription Plan",
        "price": "799,00",
        "issueDate": dayjs().subtract(6, "days").format("DD MMM YYYY"),
        "dueDate": dayjs().subtract(6, "days").add(1, "month").format("DD MMM YYYY")
    }
]