#!/usr/bin/env python3
"""
Bu modul asinxron siyahı toplama əməliyyatının paralel icra
müddətini ölçən funksiyanı ehtiva edir.
"""
import asyncio
import time

# Əvvəlki fayldan async_comprehension-u idxal edirik
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    async_comprehension funksiyasını 4 dəfə paralel şəkildə
    icra edir və ümumi keçən vaxtı qaytarır.
    """
    start_time = time.perf_counter()

    # 4 ədəd coroutine-i eyni anda paralel işə salırıq
    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    end_time = time.perf_counter()
    return end_time - start_time
