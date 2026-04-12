#!/usr/bin/env python3
"""
Bu modul asinxron funksiyanın icra müddətini ölçmək üçün
lazım olan funksiyanı ehtiva edir.
"""
import time
import asyncio

# wait_n funksiyasını əvvəlki fayldan idxal edirik
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    wait_n funksiyasının ümumi icra müddətini ölçür və
    orta vaxtı (total_time / n) qaytarır.
    """
    start_time = time.perf_counter()

    # Asinxron wait_n funksiyasını sinxron mühitdə işə salırıq
    asyncio.run(wait_n(n, max_delay))

    end_time = time.perf_counter()
    total_time = end_time - start_time

    return total_time / n
