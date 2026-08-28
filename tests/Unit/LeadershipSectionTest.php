<?php

test('the welcome page includes the historical leadership section and its portraits', function () {
    $welcomePage = file_get_contents(
        dirname(__DIR__, 2).'/resources/js/pages/welcome.tsx',
    );

    expect($welcomePage)
        ->toContain('Our Inspiring Leadership Throughout History')
        ->toContain('Shaheed President Ziaur Rahman')
        ->toContain('Begum Khaleda Zia')
        ->toContain('Tarique Rahman')
        ->toContain('animate-leader-from-left')
        ->toContain('animate-leader-from-bottom')
        ->toContain('animate-leader-from-right')
        ->and(dirname(__DIR__, 2).'/public/images/mp/leader-ziaur-rahman.jpg')
        ->toBeFile()
        ->and(dirname(__DIR__, 2).'/public/images/mp/leader-khaleda-zia.jpg')
        ->toBeFile()
        ->and(dirname(__DIR__, 2).'/public/images/mp/leader-tarique-rahman.jpg')
        ->toBeFile();
});
