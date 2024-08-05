export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getTimestampDifference(timestamp: string) {
    const now = new Date();
    const then = new Date(timestamp);
    const timeDiff = now.getTime() - then.getTime();
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years}y`;
    }
    if (months > 0) {
        return `${months}mo`;
    }
    if (weeks > 0) {
        return `${weeks}w`;
    }
    if (days > 0) {
        return `${days}d`;
    }
    if (hours > 0) {
        return `${hours}h`;
    }
    if (minutes > 0) {
        return `${minutes}m`;
    }
    return "now";
}