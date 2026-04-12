#!/usr/bin/env python3
"""
Bu modul task_wait_random istifadə edərək eyni anda birdən çox
asinxron tapşırığı icra edən funksiyanı ehtiva edir.
"""
import asyncio
from typing import List

# Lazımi funksiyaları əvvəlki fayllardan idxal edirik
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    task_wait_random funksiyasını n dəfə çağırır və nəticələri
    bitmə ardıcıllığına (artan sıra ilə) görə qaytarır.
    """
    delays = []
    # n sayda Task yaradırıq
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # Tapşırıqlar bitdikcə nəticələri siyahıya əlavə edirik
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
