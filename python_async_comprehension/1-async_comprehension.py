#!/usr/bin/env python3
"""
Bu modul asinxron generatoru istifadə edərək siyahı yaradan
coroutine-i ehtiva edir.
"""
from typing import List

# Əvvəlki fayldan async_generator-u idxal edirik
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Async comprehension vasitəsilə async_generator-dan 10 ədəd
    təsadüfi rəqəm toplayır və siyahı kimi qaytarır.
    """
    return [i async for i in async_generator()]
