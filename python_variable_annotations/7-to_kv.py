#!/usr/bin/env python3
"""
Bu modul sətir və ədəd qəbul edib tuple qaytaran funksiyanı ehtiva edir.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Sətir və ədəd qəbul edir, ədədin kvadratını float kimi
    hesablayıb tuple (k, v^2) qaytarır.
    """
    return (k, float(v**2))
