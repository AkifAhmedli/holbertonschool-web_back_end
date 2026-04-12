#!/usr/bin/env python3
"""
Bu modul bir neçə asinxron tapşırığı eyni anda icra edən
və nəticələri toplayan funksiyanı ehtiva edir.
"""
import asyncio
from typing import List

# Əvvəlki fayldan wait_random funksiyasını idxal edirik
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    wait_random funksiyasını n dəfə eyni anda çağırır və
    gecikmə müddətlərini bitmə ardıcıllığına görə siyahıda qaytarır.
    """
    delays = []
    # asyncio.as_completed hər bir tapşırıq bitdikcə nəticəni dərhal verir
    tasks = [wait_random(max_delay) for _ in range(n)]
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
