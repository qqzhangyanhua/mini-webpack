
### node 是什么
    node 不是一门语言 是一个运行时

## 单线程 &多线程
 - 多线程 每次请求到来时都需要开启一个线程来处理请求，这样会导致线程的创建和销毁的开销，而且线程之间的切换也会消耗一定的时间，所以在高并发的情况下，多线程的性能会下降。
 - 单线程 一个进程只有一个线程，这个线程负责处理所有的请求，这样就不会出现线程切换的问题，但是这样也会导致一个问题，就是如果一个请求耗时很长，那么这个线程就会一直被占用，其他请求就只能等待，这样就会导致性能的下降。
