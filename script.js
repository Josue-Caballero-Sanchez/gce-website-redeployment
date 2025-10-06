function UpdateTimes() {
    const now = new Date();
    const formatOptions = { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true
    };

    const timeZones = {
        az: now.toLocaleTimeString('en-US', { ...formatOptions, timeZone: 'America/Phoenix' }),
        local: now.toLocaleTimeString('en-US', { ...formatOptions, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }),
        pacific: now.toLocaleTimeString('en-US', { ...formatOptions, timeZone: 'America/Los_Angeles' }),
        mountain: now.toLocaleTimeString('en-US', { ...formatOptions, timeZone: 'America/Denver' }),
        central: now.toLocaleTimeString('en-US', { ...formatOptions, timeZone: 'America/Chicago' }),
        eastern: now.toLocaleTimeString('en-US', { ...formatOptions, timeZone: 'America/New_York' }),
        alaska: now.toLocaleTimeString('en-US', { ...formatOptions, timeZone: 'America/Anchorage' }),
        hawaii: now.toLocaleTimeString('en-US', { ...formatOptions, timeZone: 'Pacific/Honolulu' }),
    };

    document.getElementById('arizona-time').textContent = timeZones.az;
    document.getElementById('local-time').textContent = timeZones.local;
    document.getElementById('pacific-time').textContent = timeZones.pacific;
    document.getElementById('mountain-time').textContent = timeZones.mountain;
    document.getElementById('central-time').textContent = timeZones.central;
    document.getElementById('eastern-time').textContent = timeZones.eastern;
    document.getElementById('alaska-time').textContent = timeZones.alaska;
    document.getElementById('hawaii-time').textContent = timeZones.hawaii;
}

UpdateTimes();
setInterval(UpdateTimes, 1000);